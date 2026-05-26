import {
  Action,
  AvailableAction,
  AvailableTrigger,
  Trigger,
  Zap,
  ZapRun,
  type OutboxMessage,
} from "@repo/db";

// function parseMessage(text, values) {
//   //text: we are sending {comment.amount} to {comment.email}
//   //values: {comment: {
//   // email: 'vasudev', amount: 10}}

//   //response ; we are sending 10 to vasudev

//   values = JSON.parse(values);
//   let i = 0;
//   let ans = "";

//   while (i < text.length) {
//     const val = text[i];

//     if (val != "{") {
//       ans += val;
//       i++;
//     } else {
//       let j = i+1;
//       while(text[j] != '}') {
//         j++;
//       }
//       ans+= extractValue(text.substring(++i, j), values)
//       i=j+1;
//     }
//   }
//   return ans;
// }

// function extractValue(string, values) {

//     let i = 0;

//     while (i < string.length) {
//       let index = string.indexOf(".");
//     if (index != -1) {
//       values = values[string.substring(i, index)];
//       i = index+1;
//     } else {
//         values = values[string.substring(i)];
//         break;
//     }
//     string = string.substring(i, string.length);
//   }
//   return values;
// }
function parseMessage(text: string, values: string | Record<string, unknown>) {
  const parsedValues: Record<string, unknown> =
    typeof values === "string" ? JSON.parse(values) : values;

  return text.replace(/\{(.*?)\}/g, (_: string, path: string) => {
    return extractValue(path, parsedValues);
  });
}

function extractValue(path: string, obj: Record<string, unknown>) {
  let current: unknown = obj;

  for (const key of path.split(".")) {
    if (!current || typeof current !== "object") {
      return "";
    }

    current = (current as Record<string, unknown>)[key];
  }

  return current == null ? "" : String(current);
}

export async function handleMessage(message: OutboxMessage) {
  const zapRun = await ZapRun.findOne({
    where: { id: message.zap_run_id },
    include: {
      model: Zap,
      as: "zap",
      include: [
        {
          model: Action,
          as: "actions",
          include: [
            {
              model: AvailableAction,
              as: "available_action",
            },
          ],
        },
        {
          model: Trigger,
          as: "trigger",
          include: [
            {
              model: AvailableTrigger,
              as: "available_trigger",
            },
          ],
        },
      ],
    },
  });

  console.log(zapRun);

  if(zapRun?.status=='pending') {
    zapRun.markAsRunning()
    await zapRun.save();
  }

  const metadata = zapRun?.meta_data;

  const action = zapRun?.zap.actions[zapRun.current_action];

  if(action.name=='mail') {
    
  }

  
}

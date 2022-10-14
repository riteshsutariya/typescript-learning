enum direction {
  Up = 1,
  Down,
  Right,
  Left,
}

enum FileAccess {
  None,
  Read,
  Write,
  ReadWrite,
}

enum userResponse {
  No = 0,
  Yes = 1,
}

function response(recipient: string, message: userResponse): void {
  console.log(`Recipient: ${recipient} \nRepsonse: ${message}`);
}

response("Bob Marsh", userResponse.Yes);
export {};

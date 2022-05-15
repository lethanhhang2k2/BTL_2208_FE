export interface MessageProps {
    id: string,
    userId: string,
    content: string,
    sent_at: string
}

const Message1Example: MessageProps = {
    id: "001",
    userId: "001",
    content: "Hello",
    sent_at: "21:00 21-09-2002"
}

const Message1Example1: MessageProps = {
    id: "002",
    userId: "001",
    content: "Hello",
    sent_at: "21:01 21-09-2002"
}

const Message1Example2: MessageProps = {
    id: "003",
    userId: "001",
    content: "Hello",
    sent_at: "21:03 21-09-2002"
}

const Message2Example: MessageProps = {
    id: "004",
    userId: "002",
    content: "Hello",
    sent_at: "21:03 21-09-2002"
}

const Message2Example1: MessageProps = {
    id: "005",
    userId: "002",
    content: "Where are you from?",
    sent_at: "21:03 21-09-2002"
}

const Message2Example2: MessageProps = {
    id: "006",
    userId: "002",
    content: "I'm from XXX.",
    sent_at: "21:03 21-09-2002"
}


const Message1Example3: MessageProps = {
    id: "007",
    userId: "001",
    content: "そうか。",
    sent_at: "21:03 21-09-2002"
}

const Message1Example4: MessageProps = {
    id: "008",
    userId: "001",
    content: "日本に　済んでいます。",
    sent_at: "21:03 21-09-2002"
}

const Message1Example5: MessageProps = {
    id: "009",
    userId: "001",
    content: "XXXは　どこですか。",
    sent_at: "21:03 21-09-2002"
}

const Message2Example3: MessageProps = {
    id: "010",
    userId: "002",
    content: "Đây là 1 tin nhắn siêu siêu siêu siêu siêu siêu siêu dài...",
    sent_at: "21:03 21-09-2002"
}

const Message2Example4: MessageProps = {
    id: "011",
    userId: "002",
    content: "Đây là 1 tin nhắn siêu siêu siêu siêu siêu siêu siêu dài hơn nữa \n Và là tin nhắn 2 dòng :))",
    sent_at: "21:03 21-09-2002"
}

export const MessagesEx = [
    Message1Example,
    Message1Example1,
    Message1Example2,
    Message2Example,
    Message2Example1,
    Message2Example2,
    Message1Example3,
    Message1Example4,
    Message1Example5,
    Message2Example3,
    Message2Example4
]
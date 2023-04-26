import { TopBarMessageItem } from "./TopBarMessageItem";

export const TopBarListMessage = () => {
  return (
    <>
      <h6 className="dropdown-header">Message Center</h6>
      <TopBarMessageItem
        messageItem={{
          imgUrl: "img/undraw_profile_1.svg",
          content:
            "Hi there! I am wondering if you can help me with a problem I've been having.",
          sender: "Emily Fowler",
        }}
      />
      <TopBarMessageItem
        messageItem={{
          imgUrl: "img/undraw_profile_2.svg",
          content:
            "I have the photos that you ordered last month, how would you like them sent to you?",
          sender: "Jae Chun",
        }}
      />
      <TopBarMessageItem
        messageItem={{
          imgUrl: "img/undraw_profile_3.svg",
          content:
            "Last month's report looks great, I am very happy with the progress so far, keep up the good work!",
          sender: "Morgan Alvarez",
        }}
      />
      <TopBarMessageItem
        messageItem={{
          imgUrl: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
          content:
            "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...",
          sender: "Chicken the Dog",
        }}
      />
      <a className="dropdown-item text-center small text-gray-500" href="#">
        Read More Messages
      </a>
    </>
  );
};

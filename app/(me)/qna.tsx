import React from "react";

const qnas = [
  {
    question: "What makes a good designer, in your opinion?",
    answer:
      "I think a good designer understand the purpose, the meaning and the people they are designing for. The design can be cool and all but if the audience doesn’t get it, the designer fails doing their job.",
  },
  {
    question: "What do you do when you are not designing?",
    answer:
      "Well, I live like a normal person, a healthy one. You will see me sweating at a gym, chilling in a park or by the sea, enjoying a good movie, playing Nintendo Switch or wondering at a museum. I would occasionally go hiking with friends. I’m not really into 420 loud parties, but count me in for an asian style karaoke night :)",
  },
  {
    question:
      "There is skill, and there’s talent. What is a natural talent you’ve always had?",
    answer:
      "I’m pretty in tune with music, especially with rhythm. Some of my friends say I’m a good singer. I probably will be if I had proper vocal training. I did break my voice on stage in my high school singing competition :( But that didn’t stop me from having shower concerts.",
  },
];

const QNA = () => {
  return (
    <div className="flex flex-col-reverse mx-8 md:grid md:grid-cols-2 w-full mr-8 text-black">
      <div className="flex flex-col gap-3 mr-16 mt-5 md:mt-24 min-w-fit lg:min-w-[500px] lg:w-[500px]">
        {qnas.map(({ question, answer }) => (
          <div className="mb-6">
            <div className="font-bold">{question}</div>
            <div className="font-normal">{answer}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="sticky top-0 text-[100px] md:text-[190px] lg:text-[200px] xl:text-[280px] 2xl:text-[400px] 3xl:text-[600px]">
          <span className="leading-tight">Q&A</span>
        </div>
      </div>
    </div>
  );
};

export default QNA;

import readingTime from "reading-time"

export default {
  async beforeCreate({params}) {
    const { data } = params;
    if (data?.content && data.content?.length > 0) {
      data.readingTime = readingTime(data.content).text;
      // TODO: instead of english generated text of time,
      // we could just save the minutes as int
    }
  },
  async beforeUpdate({params}) {
    const { data } = params;
    if (data?.content && data.content?.length > 0) {
      data.readingTime = readingTime(data.content).text;
    }
  },
};

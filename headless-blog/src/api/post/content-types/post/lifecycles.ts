import readingTime from "reading-time"

export default {
  async beforeCreate({params}) {
    const { data } = params;
    if (data?.content && data.content?.length > 0) {
      data.readingTime = readingTime(data.content).text;
    }
  },
  async beforeUpdate({params}) {
    const { data } = params;
    if (data?.content && data.content?.length > 0) {
      data.readingTime = readingTime(data.content).text;
    }
  },
};

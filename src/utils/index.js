export const createMarks = total => {
    const marks = [];
    for (let i = 0; i < total; i++) {
      marks.push({ value: "" });
    }
    return marks;
};
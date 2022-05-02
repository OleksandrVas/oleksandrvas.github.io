function getFirstLetter(arr: string[]) {
  return arr.reduce((acc: string, el: string) => {
    return acc + el.at(0);
  }, "");
}

export const getLetterOfNameAndSecondName = (user: string) => {
  const split = user.split(" ");
  const formattedSplitMrs = split.includes("Mrs.")
    ? split.slice(1, 3)
    : split.slice(0, 2);
  const formattedSplitMs = formattedSplitMrs.includes("Ms.")
    ? split.slice(1, 3)
    : formattedSplitMrs.slice(0, 2);
  return getFirstLetter(formattedSplitMs);
};

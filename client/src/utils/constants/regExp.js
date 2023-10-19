export const NAME = {
  msg: 'only letters, numbers, underscores, dashes, spases',
  regExp: /^[a-zA-Zа-яА-Я0-9]+(([_ -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/,
};

export const EMAIL = {
  msg: 'test@test.com, test@test.ua',
  regExp: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
};

export const rules = {
    nameRules:[
        {
          required: true,
          message: "请输入姓名",
        },
        {
          pattern: /^\S{2,10}$/,
          message: "请输入3到10个字符",
        },
      ],
    passwordRules:[
        {
          required: true,
          message: "请输入密码",
        },
        {
          pattern: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z]).*$/,
          message: "最少6位,包括至少1个字母和数字",
        },
      ],
      emailRules:[
        {
          required: true,
          message: "请输入邮箱",
        },
        {
          pattern:
            /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/,
          message: "请输入正确的邮箱",
        },
      ],
      phoneRules:[
        {
          required: true,
          message: "请输入手机号码",
        },
        {
          pattern: /^\d{11}$/,
          message: "请输入正确的手机号码",
        },
      ]
}
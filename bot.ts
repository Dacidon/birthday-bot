import { Bot } from "grammy";

const bot = new Bot("6647826493:AAH0RB3d4-x4DeDwDSzuV_vTBIJmCK60aes"); 

const BOT_DEVELOPER = 123456;

bot.use(async (ctx, next) => {
    ctx.config = {
      botDeveloper: BOT_DEVELOPER,
      isDeveloper: ctx.from?.id === BOT_DEVELOPER,
    };

    await next();
  });

bot.command("start", async ctx => {
    if (ctx.config.isDeveloper)
        await ctx.reply("Приветствую. Данное сообщение должен видеть только разработчик.");
    else 
        await ctx.reply("Бот предназначен для напоминания о дне рождения. Использование: TODO");
});

bot.command("setbd", async ctx => {
    await ctx.reply("Укажите день и месяц рождения в формате: ");
    const date = ctx.message?.text;
    await ctx.reply("Укажите имя именинника: ");
    const name = ctx.message?.text;
});

bot.start();
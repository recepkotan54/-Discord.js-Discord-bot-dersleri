const embed = new Discord.RichEmbed()
      .setTitle("Bu bir başlık! 256 Karaktere kadar çıkabilir!")

      .setAuthor("Kullanıcı İsmi",)
      .setColor(0x00AE86)
      .setDescription("Bu ise Embed Açıklaması. 2048 karaktere kadar çıkabilir!")
      .setFooter("Bu ise alt metin. 2048 karaktere kadar çıkabilir!", "https://i.hizliresim.com/3E8pg9.jpg")

      .setImage("https://i.hizliresim.com/JQLOV5.png")

      .setThumbnail("https://i.hizliresim.com/3E8pg9.jpg")
      .setTimestamp()
      url("https://frostydonuts.glitch.me")
      addField("Bu bir bölüm başlığı. 256 karaktere kadar çıkabilir!",
        "Bu ise başlığın açıklaması. 2048 karaktere kadar çıkabilir!")
      .addField("Başlık 2", "Açıklama 2")

      .addBlankField(true)

      message.channel.send({embed});
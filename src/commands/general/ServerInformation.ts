/**
 * Copyright (c) Sflynlang
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import { general } from "@Decorators/commandTypes";
import command from "@Decorators/command";
import Command from "@Commands/Command";
import IMessage from "@Interfaces/IMessage";
import { MessageEmbed } from "discord.js";

@general
@command({
  name: "server-information",
  description: "Show information's about server",
})
class ServerInformationCommand extends Command {
  async run(message: IMessage): Promise<void> {
    const embed = new MessageEmbed();

    const { guild } = message;

    if (guild) {
      const infos = {
        name: guild.name,
        icon: guild.iconURL(),
        ownerNickname: guild.owner ? guild.owner.user.username : null,
        created: guild.createdAt.toUTCString(),
        region: guild.region,
        members: guild.memberCount,
        channels: (() => {
          const existingChannels = guild.channels.cache.filter(
            (channel) =>
              channel.deleted === false && channel.type !== "category"
          );
          return existingChannels.size;
        })(),
        premiumSubscriptionCount: guild.premiumSubscriptionCount,
        id: guild.id,
      };

      embed.setTitle("").setAuthor(infos.name);
      infos.icon && embed.setThumbnail(infos.icon);
      embed
        .addField("Owner", infos.ownerNickname)
        .addField("Created", infos.created)
        .addField("Region", infos.region, true)
        .addField("Members", infos.members, true)
        .addField("Channels", infos.channels, true);
      infos.premiumSubscriptionCount &&
        embed.addField(
          "Premium Subscription Count",
          infos.premiumSubscriptionCount
        );
      embed.addField("ID", infos.id);
    } else {
      embed.setDescription("ERROR. This command is specific from servers!");
    }

    await message.reply(embed);
  }
}

export default ServerInformationCommand;

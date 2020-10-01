/**
 * Copyright (c) Sflynlang
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import Bot from "@Bot";

/**
 * On bot ready event.
 *
 * @function
 * @param { Bot } bot
 * @returns { void }
 */
function onReady(bot: Bot): void {
  const { user } = bot.getClient();
  if (user) console.log(`${user.tag} connected!`);
}

export default onReady;

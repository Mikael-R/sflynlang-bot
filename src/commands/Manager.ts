/**
 * Copyright (c) Sflynlang
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import ICommand from "@Interfaces/ICommand";

// Developer
import SetChannel from "./developer/SetChannel";
import SetRole from "./developer/SetRole";

// General
import Help from "./general/Help";
import Ping from "./general/Ping";
import ServerInformation from "./general/ServerInformation";
import Suggestion from "./general/Suggestion";

/**
 * Commands Manager.
 * @class
 */
class CommandsManager {
  private commands: ICommand[];

  constructor() {
    this.commands = [];
  }

  /**
   * Start the commands manager.
   *
   * @function
   * @returns { void }
   */
  run(): void {
    // Developer commands
    this.commands.push(new SetChannel());
    this.commands.push(new SetRole());

    // General commands
    this.commands.push(new Help());
    this.commands.push(new Ping());
    this.commands.push(new ServerInformation());
    this.commands.push(new Suggestion());
  }

  /**
   * Get all commands.
   *
   * @function
   * @returns { ICommand[] }
   */
  getCommands(): ICommand[] {
    return this.commands;
  }

  /**
   * Get a command by its name.
   *
   * @function
   * @param { string } name
   * @returns { ICommand | null }
   */
  getCommandByName(name: string): ICommand | null {
    return this.commands.find((command) => command.name === name) || null;
  }
}

export default CommandsManager;

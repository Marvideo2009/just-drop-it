/*
 * just-drop-it
 * Copyright (C) 2016 Orange
 * Authors: Benjamin Einaudi  benjamin.einaudi@orange.com
 *          Arnaud Ruffin arnaud.ruffin@orange.com
 *
 * This file is part of just-drop-it.
 *
 * just-drop-it is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with just-drop-it.  If not, see <http://www.gnu.org/licenses/>.
 */
import Debug from "debug";

const debug = Debug("app:utils");
debug.log = console.log.bind(console);

export default class Utils {

    static getVersion(): string {
        return process.env.npm_package_version || "unknown";
    }

    static isDevDeployment(): boolean {
        // return process.env.NODE_ENV !== "production";
        return false
    }

    static getUserMessage() : string  {
        return  process.env.USER_INFO_MESSAGE || "";
    }

    static getADumbQuote() : string {
        const dumbQuotes = ["Facilitons vos transferts de fichiers",
            "Rendre le monde meilleur",
            "Faites des transferts de fichiers, pas la guerre",
            "Quand le transfert de fichiers devient un plaisir",
            "Le transfert de fichiers n’est pas une fatalité",
            "Aider l’humanité à prospérer"];
        return  dumbQuotes[Math.floor(Math.random() * dumbQuotes.length)];
    }

}








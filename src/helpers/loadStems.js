import Stem from "@/classes/Stem";
import * as Tone from "tone";

function getStem(name) {
  return { [name]: `/assets/in-dreams-${name}.[webm|mp3]` };
}

function loadPlayers() {
  return new Promise((resolve) => {
    let players = new Tone.Players({
      urls: {
        ...getStem("bass"),
        ...getStem("guitar"),
        ...getStem("vox-left"),
        ...getStem("drums"),
        ...getStem("vox"),
        ...getStem("synth"),
        ...getStem("vox-right"),
      },
      onload: () => resolve(players),
    });
  });
}

async function loadStems() {
  let players = await loadPlayers();

  return {
    voxL: new Stem({
      name: "vox left",
      animation: "earLeft",
      player: players.player("vox-left"),
    }),
    guitar: new Stem({
      name: "guitar",
      animation: "eyeLeft",
      player: players.player("guitar"),
    }),
    drums: new Stem({
      name: "drums",
      animations: ["earLeft", "earRight"], // @TODO
      player: players.player("drums"),
      speed: 0.5,
    }),
    vox: new Stem({
      name: "vox",
      animation: "mouth",
      player: players.player("vox"),
    }),
    synth: new Stem({
      name: "synth",
      animation: "eyeMiddle",
      player: players.player("synth"),
      speed: 0.1,
    }),
    bass: new Stem({
      name: "bass",
      animation: "eyeRight",
      player: players.player("bass"),
    }),
    voxR: new Stem({
      name: "vox right",
      animation: "earRight",
      player: players.player("vox-right"),
    }),
  };
}

export default loadStems;

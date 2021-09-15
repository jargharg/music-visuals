import Stem from "@/classes/Stem";
import * as Tone from "tone";

// const getRemoteStemUrl = (name) => `https://jargharg-stems.s3.eu-west-2.amazonaws.com/in-dreams-${name}.mp3`;

const COLORS = ["#ef6351", "#f38375", "#f7a399", "#fbc3bc", "#ffe3e0"];

function getStem(name) {
  return { [name]: require(`@/assets/in-dreams-${name}.mp3`) };
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
      player: players.player("vox-left"),
      fillColor: `${COLORS[0]}99`,
    }),
    guitar: new Stem({
      name: "guitar",
      player: players.player("guitar"),
      fillColor: COLORS[1],
    }),
    drums: new Stem({
      name: "drums",
      player: players.player("drums"),
      fillColor: COLORS[2],
      speed: 0.5,
    }),
    vox: new Stem({
      name: "vox",
      player: players.player("vox"),
      fillColor: COLORS[4],
    }),
    synth: new Stem({
      name: "synth",
      player: players.player("synth"),
      fillColor: COLORS[3],
      speed: 0.1,
    }),
    bass: new Stem({
      player: players.player("bass"),
      name: "bass",
      fillColor: COLORS[0],
    }),
    voxR: new Stem({
      name: "vox right",
      player: players.player("vox-right"),
      fillColor: `${COLORS[0]}99`,
    }),
  };
}

export default loadStems;

import {mediaPrefix} from './customExports'

export const animals:any = {
    dolphin: {
      image: mediaPrefix({media:'dolphin.png'}),
      facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
    },
    lobster: {
      image: mediaPrefix({media:'lobster.png'}),
      facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
    },
    starfish: {
      image: mediaPrefix({media:'starfish.png'}),
      facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
    }
  };
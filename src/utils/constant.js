import {
  FashionSvg,
  FilmSvg,
  GamingSvg,
  GymSvg,
  HistorySvg,
  HomeSvg,
  LearningSvg,
  LiveSvg,
  MusicSvg,
  NewsSvg,
  PodcastSvg,
  SportSvg,
  TrendingSvg,
} from "../assets";

import { RxClock } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const explore = [
  { name: "Trending", icon: TrendingSvg },
  { name: "Music", icon: MusicSvg },
  { name: "Films", icon: FilmSvg },
  { name: "Live", icon: LiveSvg },
  { name: "Gaming", icon: GamingSvg },
  { name: "News", icon: NewsSvg },
  { name: "Sport", icon: SportSvg },
  { name: "Learning", icon: LearningSvg },
  { name: "Podcast", icon: PodcastSvg },
  { name: "Fashion & Beauty", icon: FashionSvg },
  { name: "Gym", icon: GymSvg },
];
export const home = [
  { name: "Home", icon: HomeSvg, to: "/" },
  { name: "History", icon: HistorySvg, to: "/history" },
  { name: "Watch Later", icon: RxClock, to: "/watchLater" },
  { name: "Likes", icon: AiOutlineLike, to: "/likes" },
];

export const subscriptions = [
  { name: "Code Evolution" },
  { name: "Web Dev Jukkie" },
  { name: "freecodecamp" },
  { name: "Web Dev Simplified" },
];

// export { default as demoVideo } from "../assets/";
// export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
// export const demoVideoUrl = "/video/GDa8kZLNhJ4";
// export const demoChannelTitle = "JavaScript Mastery";
// export const demoVideoTitle =
//   "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoSq =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

export const fakeArray = new Array(24).fill("mohan");

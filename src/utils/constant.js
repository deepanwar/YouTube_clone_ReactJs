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
  { name: "Trending", icon: TrendingSvg, to: "/explore/trending" },
  { name: "Music", icon: MusicSvg, to: "/explore/music" },
  { name: "Films", icon: FilmSvg, to: "/explore/films" },
  { name: "Live", icon: LiveSvg, to: "/explore/live" },
  { name: "Gaming", icon: GamingSvg, to: "/explore/gaming" },
  { name: "News", icon: NewsSvg, to: "/explore/news" },
  { name: "Sport", icon: SportSvg, to: "/explore/sport" },
  { name: "Learning", icon: LearningSvg, to: "/explore/learning" },
  { name: "Podcast", icon: PodcastSvg, to: "/explore/podcast" },
  { name: "Fashion & Beauty", icon: FashionSvg, to: "/explore/fashion" },
  { name: "Gym", icon: GymSvg, to: "/explore/gym" },
];
export const home = [
  { name: "Home", icon: HomeSvg, to: "/" },
  { name: "History", icon: HistorySvg, to: "/history" },
  { name: "Watch Later", icon: RxClock, to: "/watchLater" },
  { name: "Liked Videos", icon: AiOutlineLike, to: "/likes" },
];

export const subscriptions = [
  { name: "Code Evolution", to: "/channel/1" },
  { name: "Web Dev Jukkie", to: "/channel/2" },
  { name: "freecodecamp", to: "/channel/3" },
  { name: "Web Dev Simplified", to: "/channel/4" },
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

export const terms = [
  { name: "New" },
  { name: "Music" },
  { name: "Gaming" },
  { name: "Computer Science" },
  { name: "Superhero movies" },
  { name: "Trailers" },
  { name: "Editing" },
  { name: "Phones" },
  { name: "Comedy" },
  { name: "Laptops" },
  { name: "Dancing" },
  { name: "Photoshop" },
  { name: "Super Cars" },
  { name: "Game shows" },
];

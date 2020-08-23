import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "./blog.scss";
import "swiper/css/swiper.css";
// Assets
import Preview01 from "../../assets/blog/story01/preview.png";
import Preview02 from "../../assets/blog/story02/preview.png";
import Preview03 from "../../assets/blog/story03/preview.png";
import Preview04 from "../../assets/blog/story04/preview.png";
import Preview05 from "../../assets/blog/story05/preview.png";
import Preview06 from "../../assets/blog/story06/preview.png";
// Components
import Title from "../ui-components/title/title";
import BlogBox from "./blogBox";

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF BLOG STORIES
    stories: [
      {
        image: Preview01,
        id: "1",
        title: "Bucket-It List",
        description:
          "Social Media App coded from scratch using MySQL, JS, Express, Passport, becryptjs",
        date: "22 July 2020",
        link: "https://github.com/jimit1/book-it-list",
      },
      {
        image: Preview02,
        id: "2",
        title: "GAMES APP",
        description:
          "A fun and interactive games app coded from scratch using JS, jQuery, Bootstrap",
        date: "16 May 2020",
        link: "https://github.com/jimit1/GroupProject1-1",
      },
      {
        image: Preview03,
        id: "3",
        title: "Fitness Tracker",
        description:
          "App to view, create and track daily workouts and log multiple exercises in a workout",
        date: "02 Aug 2020",
        link: "https://github.com/jimit1/FitnessTracker",
      },
      {
        image: Preview04,
        id: "4",
        title: "Note Taker",
        description:
          "An app to write, save, and delete notes. Uses an express backend.",
        date: "20 June 2020",
        link: "https://github.com/jimit1/noteTaker",
      },
      {
        image: Preview05,
        id: "5",
        title: "Good README Generator",
        description:
          "Generates a quick README.md file based on user prompts on the cli using node",
        date: "31 May 2020",
        link: "https://github.com/jimit1/readMeGenerator",
      },
      {
        image: Preview06,
        id: "6",
        title: "Weather Dashboard",
        description: "Track Weather of your city. Leverage OpenWeatherApi",
        date: "09 May 2020",
        link: "https://jimit1.github.io/weather-app/",
      },
    ],
  };

  render() {
    // BLOG STORIES RENDER
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <div key={story.id}>
          <BlogBox article={story} />
        </div>
      ));
    }
    // OPTIONS FOR BLOG SLIDER
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className="blog" id="blog">
        <div className="wrapper">
          <Title title="PROJECTS" />
          <p className="font12">
            Projects showcasing skills is Javascript, Node.js, React.js,
            Express.js, MySQL, MongoDB
          </p>
          <div className="padding30">
            <Swiper {...params}>{storiesRender}</Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;

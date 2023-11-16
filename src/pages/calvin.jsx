import React from 'react';
import Navbar from '../Navbar';
import BlogPage from '../Components/BlogPage';


const calvin_data = {
  category: 'ARTIST',
  title: 'Calvin Duong Loves Childish Gambino',
  subtitle: 'Life is all about having fun and making memories with the people who matter.',
  image: '/public/childish_gambino.jpg',
  date: 'October 24, 2023',
  content: 'Childish Gambino',
  name: 'Calvin Duong',
  dateWritten: 'October 25, 2023',
  blogContent: "Childish Gambino is the stage name of Donald Glover, an American artist known for his versatility in the entertainment industry. He was born on September 25, 1983, in Stone Mountain, Georgia, USA. Childish Gambino is primarily recognized for his work in music, comedy, acting, and writing. Here's a brief description of his various roles and accomplishments: \n Music: Childish Gambino is a rapper, singer, and songwriter. He gained significant popularity in the music industry with his 2011 album Camp and subsequent releases like Because the Internet (2013) and Awaken, My Love! (2016). His music blends elements of hip-hop, R&B, funk, and soul, and his lyrics often touch on themes like race, identity, and social issues. \n Comedy: Before his music career took off, Donald Glover was known for his work in comedy. He was a writer for the comedy series 30 Rock and became a household name with his role as Troy Barnes on the television series Community. \n Acting: Glover has a successful acting career in both film and television. He portrayed a young Lando Calrissian in the film \n Solo: A Star Wars Story (2018) and won several awards for his role as Earn Marks in the critically acclaimed TV series Atlanta, which he also created and produced. \n Writing: He is a talented writer and has won multiple awards for his work. He created and wrote for the TV series Atlanta, exploring various aspects of life in the city. He has also written and produced music videos, comedy, and stand-up specials. \n Awards: Childish Gambino has received numerous accolades, including Grammy Awards for his music and Emmy Awards for his work in television. His song This Is America won several Grammy Awards in 2019 and is known for its impactful social commentary in the music video. Childish Gambino is often praised for his ability to cross artistic boundaries and address important social and cultural issues in his work. His unique style and talent have made him a prominent and influential figure in contemporary American entertainment."}

function Calvin() {
  return (
    <div>
      <BlogPage blogPageData={calvin_data} />
    </div>
  )
}

export default Calvin
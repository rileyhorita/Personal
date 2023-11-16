import React from 'react';
import Footer from '../Components/Footer';
import BlogPage from '../Components/BlogPage';

const riley_data = {
  category: 'ARTIST',
  title: 'Riley Horita Loves Bladee',
  subtitle: 'Life is all about having fun and making memories with the people who matter.',
  image: '/public/blade.jpg',
  date: 'October 24, 2023',
  caption: 'Bladee',
  name: 'Riley Horita',
  dateWritten: 'October 25, 2023',
  blogContent: "Bladee, the enigmatic Swedish artist and rapper, has undeniably left an indelible mark on the music landscape. His unique and genre-defying style seamlessly blends elements of cloud rap, emo, and avant-garde electronic music, challenging traditional boundaries and norms. With a voice that effortlessly oscillates between ethereal crooning and aggressive bars, Bladee's emotionally charged lyrics delve into themes of isolation, desire, and existential ponderings, resonating with a generation navigating the complexities of the digital age. His influence is palpable in the underground music scene, as he's not only pioneered a distinctive sonic aesthetic but also popularized the DIY ethos, sparking a wave of innovative, internet-born artists unafraid to experiment with sound, visuals, and fashion. Bladee's impact extends beyond music, as he stands as a symbol of authenticity and artistic integrity, continuing to shape the future of music and art with his unparalleled creativity."
}

function Riley() {
  return (
    <div>
      <BlogPage blogPageData={riley_data} />
    </div>
  )
}
export default Riley
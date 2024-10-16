import juliusomoPng from '../assets/avatars/image-juliusomo.png';
import juliusomoWebp from '../assets/avatars/image-juliusomo.webp';
import amyRobsonPng from '../assets/avatars/image-amyrobson.png';
import amyRobsonWebp from '../assets/avatars/image-amyrobson.webp';
import maxBlagunPng from '../assets/avatars/image-maxblagun.png';
import maxBlagunWebp from '../assets/avatars/image-maxblagun.webp';
import ramsesMironPng from '../assets/avatars/image-ramsesmiron.png';
import ramsesMironWebp from '../assets/avatars/image-ramsesmiron.webp';

export const data = {
  currentUser: {
    image: {
      png: juliusomoPng,
      webp: juliusomoWebp,
    },
    username: 'juliusomo',
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: '2024-09-10T06:54:16.187Z',
      score: 12,
      user: {
        image: {
          png: amyRobsonPng,
          webp: amyRobsonWebp,
        },
        username: 'amyrobson',
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: '2024-09-25T06:54:16.187Z',
      score: 5,
      user: {
        image: {
          png: maxBlagunPng,
          webp: maxBlagunWebp,
        },
        username: 'maxblagun',
      },
      replies: [
        {
          id: '2.1',
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: '2024-10-05T06:54:16.187Z',
          score: 4,
          replyingTo: 'maxblagun',
          user: {
            image: {
              png: ramsesMironPng,
              webp: ramsesMironWebp,
            },
            username: 'ramsesmiron',
          },
        },
        {
          id: '2.2',
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: '2024-10-10T06:54:16.187Z',
          score: 2,
          replyingTo: 'ramsesmiron',
          user: {
            image: {
              png: juliusomoPng,
              webp: juliusomoWebp,
            },
            username: 'juliusomo',
          },
        },
      ],
    },
  ],
};

import { motion } from 'framer-motion';
import { Flag, Trophy, Users } from 'lucide-react';

const hackathons = {
  finalists: [
    {
      icon: Trophy,
      event: 'MNIT Hackathon',
      organizer: 'IEEE CIS Summer School',
      venue: 'MNIT Jaipur',
      date: 'September 2023',
      note: 'Finalist'
    }
  ],
  participations: [
    {
      icon: Users,
      event: 'TRI NIT Hackathon’23',
      organizer: 'NIT Surathkal, Warangal & Trichy',
      venue: 'Online',
      date: 'April - May 2023',
    },
    {
      icon: Flag,
      event: 'PeCAN+ Capture the Flag Cyber Security Competition',
      organizer: 'Edith Cowan University, Australia',
      venue: 'Online',
      date: 'February 2024',
    },
    {
      icon: Users,
      event: "EnviroPen'25",
      organizer: 'IIM Lucknow',
      venue: 'Online',
      date: 'February 2025',
    }
  ],
  contests: [
    {
      event: 'IOT Expo',
      organizer: 'AICTE SPICES',
      venue: 'TCE',
      date: 'April 2023',
      detail: 'Showcased IoT-based projects related to Carbon footprints in AC.'
    },
    {
      event: 'FlipKart GRiD 5.0',
      organizer: 'Flipkart',
      venue: 'Online',
      date: 'August 2023',
      detail: 'Participated in E-Commerce Tech Quiz and received Participation Certificate.'
    },
    {
      event: 'Xiaomi OdeCode 3.0',
      organizer: 'Xiaomi India',
      venue: 'Online',
      date: 'September 2024',
      detail: 'Team quiz and cybersecurity hackathon participation.'
    },
    {
      event: 'Sparkathon',
      organizer: 'Walmart',
      venue: 'Online',
      date: 'August 2023',
      detail: 'Idea submission on eliminating static price cards.'
    },
    {
      event: 'Ideas for the Vision - Viksit Bharath @ 2047',
      organizer: 'myGOV - India',
      venue: 'Online',
      date: 'December 2023',
      detail: 'Blockchain-based healthcare system enhancement proposal.'
    },
    {
      event: 'Accenture Innovation Challenge',
      organizer: 'Accenture',
      venue: 'Online',
      date: 'November 2023',
      detail: 'Submitted AI + IoT sustainability idea for smart cities.'
    },
    {
      event: 'Coca-Cola Disrupt Season 3',
      organizer: 'Hindustan Coca-Cola Beverages',
      venue: 'Online',
      date: 'February 2024',
      detail: 'Marketing case study submitted via online assessment.'
    },
    {
      event: 'The Articulate Arena',
      organizer: 'Industries Times',
      venue: 'Online',
      date: 'January 2025',
      detail: 'Secured Rank 4 for article on consumer behavior evolution.'
    }
  ]
};

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-10"
      >
        Hackathons &{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Competitions
        </span>
      </motion.h2>

      <div className="space-y-12">
        {/* Finalists */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4 text-center">Finalist</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.finalists.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
                <item.icon className="w-6 h-6 text-purple-600 mb-2" />
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{item.event}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.organizer}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.venue} – {item.date}</p>
                <p className="mt-2 text-sm text-green-600 dark:text-green-400 font-medium">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Participation */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4 text-center">Participation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.participations.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
                <item.icon className="w-6 h-6 text-blue-500 mb-2" />
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{item.event}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.organizer}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.venue} – {item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Govt./Corporate Contests */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4 text-center">Govt/Corporate Contests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.contests.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{item.event}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.organizer}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.venue} – {item.date}</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;

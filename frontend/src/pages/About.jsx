// // src/pages/About.js
// // import React from 'react';

// // const About = () => {
// //   return (
// //     <div>
// //       <h2>About Us</h2>
// //       <p>We are dedicated to helping individuals track and improve their mental health through various tools and assessments.</p>
// //     </div>
// //   );
// // };

// // export default About;
// import React from 'react';
// import { FaCalendarCheck, FaComments, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
// import "../style/About.css";


// const About = () => {
//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1>About</h1>

//       <img 
//         src="your-image-url-here" 
//         alt="Mental Health Illustration" 
//         style={{ width: '100%', maxWidth: '600px', margin: '20px 0' }} 
//       />

//       <h2>About Us</h2>
//       <p>Makes You Feel Mental Again. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

//       <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '20px' }}>
//         <div style={{ flex: 1, textAlign: 'left' }}>
//           <p>Duis eleifend est vitae rutrum tincidunt. In lobortis nisi justo, nec feugiat nunc fringilla ac. Aenean at ipsum dolor. Vestibulum iaculis pretium porta. Etiam iaculis, ipsum eu volutpat suscipit, lacus nulla hendrerit arcu, sed efficitur enim erat ac enim. Suspendisse malesuada mi cursus diam.</p>
//         </div>

//         <div style={{ flex: 1, textAlign: 'left' }}>
//           <p>Morbi ullamcorper, diam a tempus feugiat, lacus enim tempus libero, eu mollis arcu lorem eu magna. Etiam pretium, turpis quis pulvinar luctus, lacus eros suscipit risus, sed porta lacus leo at elit. Aliquam erat volutpat. Mauris vestibulum aliquet turpis id scelerisque.</p>
//         </div>
//       </div>

//       <img 
//         src="another-image-url-here" 
//         alt="Another Illustration" 
//         style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }} 
//       />

//       <p style={{ marginTop: '20px' }}>
//         We have been providing mental health consultation services since 1997 and have helped hundreds of people.
//       </p>

//       <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
//         <div>
//           <h3>Years Experience</h3>
//           <p>25 +</p>
//         </div>
//         <div>
//           <h3>Active Members</h3>
//           <p>7.8 K+</p>
//         </div>
//         <div>
//           <h3>Professional Team</h3>
//           <p>300 +</p>
//         </div>
//         <div>
//           <h3>Satisfied Clients</h3>
//           <p>99 %</p>
//         </div>
//       </div>

//       {/* Team Members Section */}
//       <div style={{ marginTop: '40px' }}>
//         <h2>Meet Our Team</h2>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
//           {[ 
//             { name: 'Tommy Samuela', role: 'Counselor', image: 'team-member-photo-1-url' },
//             { name: 'Lucas Damian', role: 'Counselor', image: 'team-member-photo-2-url' },
//             { name: 'Ronald Wilson', role: 'Counselor', image: 'team-member-photo-3-url' },
//             { name: 'Carla Klause', role: 'Counselor', image: 'team-member-photo-4-url' },
//             { name: 'Sara Evans', role: 'Therapist', image: 'team-member-photo-5-url' },
//             { name: 'Mike Jordan', role: 'Therapist', image: 'team-member-photo-6-url' },
//             { name: 'Emma Stone', role: 'Psychologist', image: 'team-member-photo-7-url' }
//           ].map((teamMember, index) => (
//             <div key={index} style={{ textAlign: 'center' }}>
//               <img 
//                 src={teamMember.image} 
//                 alt={teamMember.name} 
//                 style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} 
//               />
//               <h3>{teamMember.name}</h3>
//               <p>{teamMember.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div style={{ marginTop: '40px', padding: '20px' }}>
//         <h2>Our Values</h2>
//         <p>From Nonhuman to Earthborn</p>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen tesque ipsum, convallis malesuada ut, aliquam sollicitudin ipsum.</p>
//       </div>

//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
//         {[{ title: 'Passion', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' },
//           { title: 'Community', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' },
//           { title: 'Commitment', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' },
//           { title: 'Growth', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' },
//           { title: 'Honesty', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' },
//           { title: 'Team Work', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' }]
//           .map((value, index) => (
//             <div key={index} style={{ flex: '1 1 30%', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', maxWidth: '300px' }}>
//               <h3>{value.title}</h3>
//               <p>{value.text}</p>
//             </div>
//           ))}
//       </div>

//       <div style={{ marginTop: '40px', fontSize: '18px', color: '#555' }}>
//         <p>Trusted by 1000+ companies worldwide. Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec mattis.</p>
//       </div>

//       <div style={{ marginTop: '40px', padding: '20px' }}>
//         <h2>Our Process</h2>
//         <p>Let’s All Fight Mental Illness</p>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
//           {[{ icon: <FaCalendarCheck size={40} color="#007bff" />, title: 'Appointment', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//             { icon: <FaComments size={40} color="#007bff" />, title: 'Consultation', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//             { icon: <FaHandsHelping size={40} color="#007bff" />, title: 'Support', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//             { icon: <FaCheckCircle size={40} color="#007bff" />, title: 'Result', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }]
//             .map((step, index) => (
//               <div key={index} style={{ flex: '1 1 45%', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', maxWidth: '300px', textAlign: 'center' }}>
//                 {step.icon}
//                 <h3>{step.title}</h3>
//                 <p>{step.text}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';
import { FaCalendarCheck, FaComments, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
import "../style/About.css"; // Adjust the import path if necessary

const About = () => {
  return (
    <div className="about-section">
      <h1>About</h1>

      <img 
        src="your-image-url-here" 
        alt="Mental Health Illustration" 
        className="about-banner"
      />

      <h2>About Us</h2>
      <p className="about-summary">Makes You Feel Mental Again. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="content-row">
        <div className="content-column">
          <p>Duis eleifend est vitae rutrum tincidunt. In lobortis nisi justo, nec feugiat nunc fringilla ac. Aenean at ipsum dolor. Vestibulum iaculis pretium porta. Etiam iaculis, ipsum eu volutpat suscipit, lacus nulla hendrerit arcu, sed efficitur enim erat ac enim. Suspendisse malesuada mi cursus diam.</p>
        </div>

        <div className="content-column">
          <p>Morbi ullamcorper, diam a tempus feugiat, lacus enim tempus libero, eu mollis arcu lorem eu magna. Etiam pretium, turpis quis pulvinar luctus, lacus eros suscipit risus, sed porta lacus leo at elit. Aliquam erat volutpat. Mauris vestibulum aliquet turpis id scelerisque.</p>
        </div>
      </div>

      <img 
        src="another-image-url-here" 
        alt="Another Illustration" 
        className="illustration-image"
      />

      <p className="about-history">We have been providing mental health consultation services since 1997 and have helped hundreds of people.</p>

      <div className="stats-container">
        <div className="stats-item">
          <h3>Years Experience</h3>
          <p>25 +</p>
        </div>
        <div className="stats-item">
          <h3>Active Members</h3>
          <p>7.8 K+</p>
        </div>
        <div className="stats-item">
          <h3>Professional Team</h3>
          <p>300 +</p>
        </div>
        <div className="stats-item">
          <h3>Satisfied Clients</h3>
          <p>99 %</p>
        </div>
      </div>

      <div className="team-container">
        <h2>Meet Our Team</h2>
        <div className="team-gallery">
          {[
            { name: 'Tommy Samuela', role: 'Counselor', image: 'team-member-photo-1-url' },
            { name: 'Lucas Damian', role: 'Counselor', image: 'team-member-photo-2-url' },
            { name: 'Ronald Wilson', role: 'Counselor', image: 'team-member-photo-3-url' },
            { name: 'Carla Klause', role: 'Counselor', image: 'team-member-photo-4-url' },
            { name: 'Sara Evans', role: 'Therapist', image: 'team-member-photo-5-url' },
            { name: 'Mike Jordan', role: 'Therapist', image: 'team-member-photo-6-url' },
            { name: 'Emma Stone', role: 'Psychologist', image: 'team-member-photo-7-url' },
            { name: 'Robert Stone', role: 'Psychologist', image: 'team-member-photo-8-url' }
          ].map((teamMember, index) => (
            <div key={index} className="team-profile">
              <img 
                src={teamMember.image} 
                alt={teamMember.name} 
                className="profile-picture"
              />
              <h3>{teamMember.name}</h3>
              <p>{teamMember.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="values-container">
        <h2>Our Values</h2>
        <p className="values-intro">From Nonhuman to Earthborn</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen tesque ipsum, convallis malesuada ut, aliquam sollicitudin ipsum.</p>
      </div>

      <div className="values-grid">
        {[
          { title: 'Passion', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' },
          { title: 'Community', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' },
          { title: 'Commitment', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' },
          { title: 'Growth', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' },
          { title: 'Honesty', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' },
          { title: 'Team Work', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.' }
        ].map((value, index) => (
          <div key={index} className="value-item">
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </div>
        ))}
      </div>

      <div className="trust-section">
        <p>Trusted by 1000+ companies worldwide. Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec mattis.</p>
      </div>

      <div className="process-container">
        <h2>Our Process</h2>
        <p className="process-title">Let’s All Fight Mental Illness</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

        <div className="process-steps">
          {[
            { icon: <FaCalendarCheck size={40} color="#007bff" />, title: 'Appointment', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { icon: <FaComments size={40} color="#007bff" />, title: 'Consultation', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { icon: <FaHandsHelping size={40} color="#007bff" />, title: 'Support', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { icon: <FaHandsHelping size={40} color="#007bff" />, title: 'Support', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { icon: <FaHandsHelping size={40} color="#007bff" />, title: 'Support', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { icon: <FaCheckCircle size={40} color="#007bff" />, title: 'Result', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
          ].map((step, index) => (
            <div key={index} className="process-step">
              {step.icon}
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
  <div className="footer-container">
    <p className="footer-title">2024 Mental Health Tracker | Your Partner in Mental Wellness</p>
    
    <ul className="footer-links">
      <li><a href="#privacy-policy" className="footer-link">Privacy Policy</a></li>
      <li><a href="#terms" className="footer-link">Terms of Service</a></li>
      <li><a href="#contact" className="footer-link">Contact Us</a></li>
    </ul>

    <p className="footer-social-text">Follow us on:</p>
    <div className="footer-social-links">
      <a href="#facebook" className="social-link">Facebook</a>
      <a href="#twitter" className="social-link">Twitter</a>
      <a href="#instagram" className="social-link">Instagram</a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default About;

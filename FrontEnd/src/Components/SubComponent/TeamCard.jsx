// import React from "react";
//
// const TeamCard = ({ name, role, avatar, socialIcons, left, top }) => {
//     return (
//         <div className="absolute w-24 h-24" style={{ left: left, top: top }}>
//             {/* Avatar */}
//             <img className="w-24 h-24 rounded-full" src={avatar} alt={name} />
//
//             {/* Name */}
//             <div
//                 className="absolute text-white text-xl font-medium font-['DM_Sans'] leading-8"
//                 style={{ width: "100%" }}
//             >
//                 {name}
//             </div>
//
//             {/* Role */}
//             <div
//                 className="absolute text-white text-base font-normal font-['DM_Sans'] leading-6"
//                 style={{ width: "100%" }}
//             >
//                 {role}
//             </div>
//
//             {/* Social Icons */}
//             <div className="absolute flex space-x-2 w-full justify-center">
//                 {socialIcons.map((icon, index) => (
//                     <i
//                         key={index}
//                         className={`text-white text-lg font-normal font-['FontAwesome']`}
//                     >
//                         {icon}
//                     </i>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default TeamCard;

import { profile } from "../data/profile";

export default function AboutProfile() {
  return (
    <section id="profile" className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <div className="bg-gray-800 p-6 rounded-xl space-y-2">
        <p><b>Name:</b> {profile.personal.name}</p>
        <p><b>Nickname:</b> {profile.personal.nickname}</p>
        <p><b>Date of Birth:</b> {profile.personal.dateOfBirth}</p>
        <p><b>Age:</b> {profile.personal.age}</p>
        <p><b>Gender:</b> {profile.personal.gender}</p>
        <p><b>Nationality:</b> {profile.personal.nationality}</p>
        <p><b>Region:</b> {profile.personal.region}</p>
        <p><b>Address:</b> {profile.personal.address}</p>
      </div>

      {/* Education */}
      <h2 className="text-3xl font-bold mt-10 mb-6">Education</h2>

      <div className="space-y-4">
        {profile.education.map((edu, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-green-400">
              {edu.level}
            </h3>
            <p>{edu.school}</p>
            <p className="text-gray-300">{edu.major}</p>
            {edu.note && (
              <p className="text-gray-400 text-sm">{edu.note}</p>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
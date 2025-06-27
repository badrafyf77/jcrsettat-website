
const Members = () => {
  // Sample member data - replace with actual member information
  const members = [
    {
      id: 1,
      name: "أحمد بن علي",
      role: "الرئيس",
      image: "/uploads/members/boss.jpeg",
      about: "ربيع لكواش رئيس المجلس الاستشاري للشباب، شاب حاصل على الإجازة في القانون، فنان بصري شغوف برسم الوجوه وتصميم الشخصيات. أحب القيادة والعمل الجماعي، وطموحي كبير لتقديم مشاريع ومبادرات تخدم قريتي الصغيرة رأس العين الشاوية، والمساهمة في تنميتها ثقافيًا وفنيًا."
    },
    {
      id: 2,
      name: "زكرياء ربيعي",
      role: "",
      image: "/uploads/members/member1.jpeg",
      about: "زكرياء ربيعي\nطالب اقتصاد في جامعة حسن الأول، مهتم بدراسة التنمية الاقتصادية والاجتماعية.\nعضو نشيط في جمعية شباب ENAPIL، أشارك في المبادرات التي تهدف إلى دعم وتمكين المجتمع القروي، والعمل على تحسين ظروف العيش للشباب والنساء في القرى.\nأسعى دائما لتطوير مهاراتي وتوظيفها لخدمة قريتي والمساهمة في تنميتها المستدامة."
    },
    {
      id: 3,
      name: "وفاء الشعيبي",
      role: "",
      image: "/uploads/members/member2.jpeg",
      about: "وفاء الشعيبي 20 سنة  القاطنة بدوار الصوالحة القوارشة جماعة رأس العين طالبة جامعية في كية الاقتصاد والتدبير وأستاذة في مركز الحياة برأس العين الشاوية وعضوة في مجلس الشباب"
    },
    {
      id: 4,
      name: "سهام جمال",
      role: "",
      image: "/uploads/members/member3.jpeg",
      about: "سهام جمال، شابة من دوار أولاد الريو القوارشة التابع لجماعة رأس العين – إقليم سطات، أبلغ من العمر 25 سنة. أزاول مهمة مقررة المجلس الاستشاري للشباب بجماعة رأس العين، إيماناً مني بأهمية دور الشباب في تحقيق التنمية المحلية والمشاركة الفعالة في خدمة الساكنة."
    },
  ];

  return (
    <section id="members" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">فريقنا</h2>
          <div className="w-24 h-1 bg-gradient-to-l from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تعرف على الأعضاء المتفانين الذين يجعلون مهمتنا في التنمية المجتمعية 
            والمشاركة المواطنة ممكنة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;

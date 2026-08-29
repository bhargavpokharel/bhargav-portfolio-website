export default function PoemSection() {
  const poems = [
    {
      title: "Surrender",
      date: "2026",
      videoUrl: "/videos/I_am_surrendered_to_life.mp4",
      text: `I am surrendered to Life
It expresses Itself through me
And through all
The same Life
The same Existence
Oneness
With no one there
Just One Whole
Without separation`,
    },
    {
      title: "Fly Inwards and Merge Into the Sun",
      date: "2026",
      videoUrl: "",
      text: `Fly inwards and merge into the Sun
Not the physical Sun
But the Sun of the Atman
A Sun that never moves, never was formed, never dies, beyond space, beyond time
A Sun that stands in its infinite bliss and glory forever and ever
The external universe is a reflection of this Sun
If only I could behold it within my Heart again`,
    },
    {
      title: "Every Atom is Sparking",
      date: "2026",
      videoUrl: "",
      text: `Every atom is sparking with Knowledge (Chit (चित्))
Every particle is sparking
Sparking with consciousness
That spark grows to become a flame in man
There is a latent infinite fire in everything.
A fire of Pure Absolute Knowledge, Infinite, Indivisible, Pure, Holy.
However this flame is latent
And continuously is sparking, and flaming and flaring in everything.
It flared forth in the sun and the stars and the moon and the galaxies and the worlds and universes and planets and beyond to the endless reaches of infinity.
And rests in it's transcendent unaffected state forever as well.
It flared forth before time was and after time is.
Although where is time in this?
It is Unchanged and One and Pure forever.
Unmoving, the Axis, The One, the Unchangeable, the Stainless.
He Is, forever and ever, immovable, the basis of all.
The Sole Being.
Otherness and separation just a dream.
You cannot objectify It.
It is The Eternal Subject
You cannot see Him or know Him or hear Him or think of Him.
Because He is The Seer, The Hearer, The Knower and The Thinker.
The Pure and Holy Seer, The Self.
In and through Him, through IT, everything and everyone knows, exists, and sees.
The Self-existent One
Whom through whom all beings have existence.`,
    },
  ];

  return (
    <section className="max-w-3xl mx-auto mt-20 mb-20 text-center">
      <h2 className="text-3xl font-serif font-semibold mb-8">Poems</h2>

      <div className="space-y-12">
        {poems.map((poem, i) => (
          <div key={i} className="p-6 rounded-xl border-l-4 border-amber-600">
            {poem.videoUrl && (
              <div className="mb-4 flex justify-center">
                <video
                  controls
                  className="w-full max-w-md rounded-xl"
                >
                  <source src={poem.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            <h3 className="text-2xl font-serif font-semibold mb-2">{poem.title}</h3>
            <p className="text-sm opacity-50 mb-4">{poem.date}</p>
            <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed">
              {poem.text.split('\n').map((line, idx) => (
                <span key={idx} className="block mb-2">
                  {line || '\u00A0'}
                </span>
              ))}
            </pre>
          </div>
        ))}
      </div>

      <a
        href="/poems"
        className="inline-block mt-8 font-medium text-amber-600 hover:text-amber-500 transition-colors"
      >
        Read more poems →
      </a>
    </section>
  );
}
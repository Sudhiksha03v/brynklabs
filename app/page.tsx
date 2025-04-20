import Image from 'next/image';

async function getHomepageTitle() {
  // Ensure NEXT_PUBLIC_APP_URL is set in your environment variables
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!baseUrl) {
    console.error('Error: NEXT_PUBLIC_APP_URL environment variable is not set.');
    return 'Error: App URL not configured';
  }

  try {
    // Construct the full API URL
    const apiUrl = `${baseUrl}/api/title`; 

    const res = await fetch(apiUrl, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`Error fetching title: ${res.status} ${res.statusText}`);
      return 'Error loading title';
    }

    const data = await res.json();
    return data.title || 'Default Title';
  } catch (error) {
    console.error('Failed to fetch title:', error);
    return 'Error loading title';
  }
}


export default async function Home() {
  const pageTitle = await getHomepageTitle();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header
        className="flex items-center justify-center border-b"
        style={{
          width: '1440px',
          height: '90px',
          padding: '30px 120px',
          margin: '0 auto',
          borderBottomWidth: '3px',
          borderBottomColor: '#F4F4F5',
        }}
      >
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-gray-700">
            About
          </a>
          <div className="relative group">
            <button className="text-sm font-medium flex items-center hover:text-gray-700">
              Services
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>


{/* HERO SECTION */}
<main className="px-4 relative bg-gradient-to-b from-[#FFFFFF] to-[#FFF7EC]">
  <div className="relative">
  <div
  className="absolute"
  style={{ width: '750px', height: '276px', top: '65px', left: '130px' }}>
  <h1
    className="font-semibold leading-tight"
    style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      fontSize: '60px',
      lineHeight: '68px',
      letterSpacing: '-4px',
    }}
    dangerouslySetInnerHTML={{ __html: pageTitle }}
  ></h1>
  <div
    className="relative"
    style={{
      width: '570px',
      height: '72px',
      top: '32px', 
      marginBottom: '24px',
    }}
  >
    <p className="text-gray-600"
      style={{
        fontSize: '1.125rem',
        lineHeight: '1.3',
        color: '#4B5563'
      }}
    >
      Powerful AI solutions that go beyond mere data sorting and exploration. Use our
      array of AI-enabled solutions that understand your business and recommend the
      optimal way forward.
    </p>
  </div>
  <button
  className="bg-[#FFBD59] hover:bg-opacity-90 text-black font-semibold transition duration-300"
  style={{
    width: '123.27px',
    height: '44px',
    borderRadius: '6px',
    boxShadow: '0px 1px 14px 0px #0000001F',
    marginTop: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px'
  }}
>
  Get started
</button>
</div>

    <div
      className="absolute"
      style={{
        width: '561.19px',
        height: '826.92px',
        top: '3px',
        left: '950px', 
      }}
    >

    {/* RIGHT- HERO IMAGE */}
      <Image
        src="/images/clipart-right.png"
        alt="Curved Lines"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  </div>
  <div className="absolute left-0 hidden lg:block" style={{ top: '-3px' }}>
    <Image src="/images/clipart-left.png" alt="Curved Lines" width={130} height={379} />
  </div>

        {/* HERO SECTION SPACER */}
        <div style={{ height: '826px' }}></div>
      </main>

      {/* FEATURES */}
      <section
  className="py-32 overflow-hidden relative"
  style={{
    backgroundImage: 'url(/images/bg-pattern.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    padding: '128px 120px', 
  }}
>
  <div
    className="container mx-auto relative"
    style={{ 
      minHeight: '300px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}
  >
{/* BG BAR */}
<div className="absolute left-0 right-0 top-1/2 bg-[#F5F5F5] w-full transform -translate-y-1/2 h-[8px] rounded-[100px]"></div>

{/* PROGRESS TIMELINE BAR */}
<div 
  className="absolute left-0 top-1/2 bg-[#34D399] transform -translate-y-1/2 z-10 rounded-[100px]" 
  style={{
    width: '46px',
    height: '8px',
    borderRadius: '100px'
  }}
></div>

{/* GREEN CIRCLES */}
<div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" 
  style={{ left: '46px' }} 
>
  <div className="w-[22px] h-[22px] rounded-full bg-[#EAF8F1] flex items-center justify-center">
    <div className="w-[12px] h-[12px] bg-[#34D399] rounded-full"></div>
  </div>
</div>
    
    <div className="absolute left-[27%] w-[16px] h-[16px] bg-[#34D399] rounded-full top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute left-[50%] w-[16px] h-[16px] bg-[#34D399] rounded-full top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute left-[74%] w-[16px] h-[16px] bg-[#34D399] rounded-full top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute left-[96%] w-[16px] h-[16px] bg-[#34D399] rounded-full top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

    {/* FEATURE CARDS */}
{[
  {
    left: '10%',
    title: 'Multi-source data',
    description:
      'Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.',
    image: '/images/database.png',
  },
  {
    left: '27%', 
    title: 'Ready to Go Algos',
    description:
      'We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.',
    image: '/images/ready.png',
  },
  {
    left: '50%', 
    title: 'Stakeholder alignment',
    description:
      'No black boxes. Stakeholders understand the "how", "so what" and "now what", leading to clear decision-making trade-offs.',
    image: '/images/stakeholder.png',
  },
  {
    left: '74%', 
    title: 'Internal capability building',
    description:
      'We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.',
    image: '/images/internal.png',
  },
  {
    left: '90%', 
    title: 'Continuous engagement',
    description:
      'We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.',
    image: '/images/continuous.png',
  },
    ].map((feature, index) => (
      <div
        key={index}
        className="absolute"
        style={{
          left: feature.left,
          top: '50%',
          width: '192px',
          transform: `translateX(-50%) translateY(${index % 2 === 0 ? '3rem' : 'calc(-100% - 3rem)'})`,
        }}
      >
        <div className="flex flex-col items-start">
          <Image 
            src={feature.image} 
            alt={feature.title} 
            width={32} 
            height={32} 
          />
          <h3 
            style={{
              width: '192px',
              height: '19px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '120%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              marginBottom: feature.title === 'Internal capability building' ? '25px' : '8px', 
              marginTop: '12px'
            }}
          >
            {feature.title}
          </h3>
          <p 
            style={{
              width: '192px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '140%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: '#999999'
            }}
          >
            {feature.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>



    </div>
  );
}

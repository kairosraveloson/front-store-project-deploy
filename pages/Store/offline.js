import Link from 'next/link';

export default function Offline() {
  return (
    <div id="offline_page">
      <div
        style={{
          backgroundColor: 'none',
          color: 'white',
          fontSize: '56px',
          fontWeight: 'bold',
          fontFamily: 'Tahoma',
        }}
      >
        Restaurant fermé
      </div>
      <div style={{ color: 'white', fontSize: '18px' }}>
        Votre venue est hors ligne, bien que vos heures d&apos;ouverture
        suggèrent le contraire
      </div>
      <div>
        {' '}
        <Link href="/Store">
          <a>
            <button
              className="btn btn-primary btn-lg btn-block"
              style={{
                color: '#202125',
                backgroundColor: 'white',
                margin: '50px',
                width: '250px',
                borderStyle: 'none',
                fontWeight: '700',
              }}
              id="reconnect_offline"
            >
              {' '}
              Revenir en ligne
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

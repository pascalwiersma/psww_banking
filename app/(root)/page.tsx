import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName: 'Pascal',
    lastName: 'Wiersma',
    email: 'pascal@psww.nl'
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welkom"
            user={loggedIn?.firstName || 'Gast'}
            subtext="Krijg efficiënt toegang tot en beheer uw account en transacties."
          />
          
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        {/* Recente transactions */}
      </div>

    <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
    />

    </section>
  )
}

export default Home;
import './App.css';
import BlenHeaderRender from './HeaderComponent/BlenHeader';
import BlenDynamicCard from './DynamicComponent/BlenDynamic';
import IDBPComp from './IDBPComponent/IDBP';
import BlenTutorComp from './BlenTutorComponent/BlenTutor'
import MembersComp from './MembersComponent/Members'
import StudentTutorComp from './StudentComponent/StudentTutor'
import BlenCommunityComp from './BlenCommunityComponent/BlenCommunity'
import SubscriptionComp from './SubcriptionComponent/Subscription'
import BlenArticlesComp from './BlenArticlesComponent/Articles'
import BlenRankedComp from './BlenRankedComponent/BlenRanked'
import BlenUniversityComp from './BlenUniversityComponent/BlenUniversity'
import BlenFooterComp from './BlenFooterfComponent/BlenFooter'

function App() {
  return (
    <div className="App">
     <section class="Common-section">
       <BlenHeaderRender/>
       <BlenDynamicCard/>
       <IDBPComp/>
       <BlenTutorComp/>
       <MembersComp/>
       <StudentTutorComp/>
       <BlenCommunityComp/>
       <SubscriptionComp/>
       <BlenArticlesComp/>
       <BlenRankedComp/>
       <BlenUniversityComp/>
       <BlenFooterComp/>
     </section>
    </div>
  );
}

export default App;

import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function AssignmentDetail() {
  const router = useRouter();
  const { id } = router.query;

  const assignmentMap = {
    devre1: {
      title: 'Basit Devre Kurma',
      iframe: `<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_tr.html"
      width="800" height="600" allowfullscreen></iframe>`
    },
    devre2: {
      title: 'Ampul Parlaklığı ve Direnç',
      iframe: `<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_tr.html"
      width="800" height="600" allowfullscreen></iframe>`
    }
  };

  const data = assignmentMap[id];

  if (!data) return <div>Yükleniyor...</div>;

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.iframe }} />
      </div>
    </>
  );
}

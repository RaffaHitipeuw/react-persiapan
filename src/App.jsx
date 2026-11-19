// Panggil komponen yang telah dibuat disini agar tampil ke browser
import StudentCard from "./latihan/soal-1";
import TaskItem from "./latihan/soal-2";
import DaftarSiswa from "./latihan/soal-3";
import FormSiswa from './latihan/soal-4'
function App() {
  return (
    <div className="w-screen flex justify-center pt-10">
      <div>
        <StudentCard nama="lorem ipsum" kelas="lorem ipsum" statusLulus={true} />
        <StudentCard nama="lorem ipsum" kelas="lorem ipsum" statusLulus={false} />
        <StudentCard nama="lorem ipsum" kelas="lorem ipsum" statusLulus={true} />
      </div>
      <div>
        <TaskItem judul="lorem ipsum" prioritas="tinggi" selesai={false} />
        <TaskItem judul="lorem ipsum" prioritas="sedang" selesai={false} />
        <TaskItem judul="lorem ipsum" prioritas="rendah" selesai={true} />
      </div>

      {/* Khusus soal 3, Panggil di dalam div ini*/}
      <div className="flex flex-col gap-3">
        <DaftarSiswa />
      </div>

      <div>
        <FormSiswa />
      </div>
    </div>
  );
}

export default App;

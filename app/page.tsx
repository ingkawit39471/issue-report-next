import {issues} from "@/data/issue_data"
import {StatusBadge} from "@/component/StatusBadge"
import { IssueForm } from "@/component/IssueForm";
import { IssueList } from "@/component/IssueList";
import Link from "next/link";

export default function Home() {
  return (
      <>
<header>
<h1>ระบบแจ้งปัญหา IT</h1>
<p>แจ้งและติดตามปัญหาการใช้งานระบบภายใน</p>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Charm"></link>
</header>
<main>
    <section>
    <h2>แจ้งปัญหาใหม่</h2>
    <IssueForm></IssueForm>
    </section>

    <section className="issue-list" aria-labelledby="issue-list-title">
        <h2 id="issue-list-title">รายละเอียดปัญหาล่าสุด</h2>
        <p>ตัวอย่างรายการปัญหาที่ถูกแจ้งเข้ามาในระบบ</p>
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>รหัส</th>
                        <th>หัวข้อ</th>
                        <th>ผู้แจ้ง</th>
                        <th>สถานะ</th>
                    </tr>
                </thead>
                <IssueList issues={issues}></IssueList>
            </table>

        </div>
    </section>
</main>
<footer>
    <p>ฝ่ายไอที</p>
</footer>
</>
  );
}

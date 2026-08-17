import { StatusBadge } from "./StatusBadge";
import type { Issue } from "@/types/issue";
import Link from "next/link";

type IssueListProps = {
    issues: Issue[];
}

export function IssueList({issues}:IssueListProps){
    return (
        <tbody>
        {issues.map((issue)=>(
            <tr key={issue.id}>
            <td>#{issue.id}</td>
            <td>{issue.title}</td>
            <td>{issue.reporterName}</td>
            <td><StatusBadge status={issue.status}></StatusBadge></td>
            <td><Link href={`/issue/${issue.id}`}>view issue</Link></td>
            </tr>
        ))}
    </tbody>
    );
}
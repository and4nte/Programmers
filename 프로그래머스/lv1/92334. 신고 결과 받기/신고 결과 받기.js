function solution(id_list, report, k) {
    const userReport = new Map();
    const reportedCount = new Map();
    const reportSet = new Set(report);
    
    id_list.forEach((id) => {
        userReport.set(id, []);
        reportedCount.set(id, 0);
    });
    
    reportSet.forEach((info) => {
        const [id, targetId] = info.split(' ');
        userReport.get(id).push(targetId);
        
        const currentCount = reportedCount.get(targetId);
        if (currentCount < k) reportedCount.set(targetId, currentCount + 1);
    });

    return [...userReport].map(([id, targetIdList]) => (
        targetIdList.reduce((acc, curr) => {
            return reportedCount.get(curr) !== k ? acc : acc + 1;
        }, 0)
    ));
}
import { CaseCard } from '@/components/ui';
import { cases } from '@/lib/cases-data';

export function Cases() {
  return (
    <section id="cases" className="border-b border-border">
      <div className="p-6 md:px-12 lg:px-20 py-12 border-b border-border">
        <h2 className="text-3xl font-medium uppercase tracking-tighter">КЕЙСЫ</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3">
        {cases.map((caseItem) => (
          <CaseCard key={caseItem.id} {...caseItem} />
        ))}
      </div>
    </section>
  );
}

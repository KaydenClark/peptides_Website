import { CatalogCard } from "@/components/catalog-card";
import { catalogRecords } from "@/data/catalog";

export default function CatalogPage() {
  const recordCountLabel = catalogRecords.length === 1 ? "record" : "records";

  return (
    <section className="catalog-page content-container" aria-labelledby="catalog-title">
      <p className="eyebrow">Catalog</p>
      <h1 id="catalog-title">Research material records</h1>
      <p className="page-lead">
        Read each record&apos;s current status before beginning any research inquiry.
      </p>
      <p className="result-count" aria-live="polite">{catalogRecords.length} {recordCountLabel}</p>
      {catalogRecords.length === 0 ? (
        <p className="catalog-empty-state">No catalog records are currently listed.</p>
      ) : (
        <div className="catalog-grid">
          {catalogRecords.map((record) => (
            <CatalogCard item={record} key={record.id} />
          ))}
        </div>
      )}
    </section>
  );
}

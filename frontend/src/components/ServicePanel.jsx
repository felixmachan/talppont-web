import React from "react";
import "./ServicePanel.css";

function ServicePanel(props) {
  const {
    id,
    title,
    lead,
    bullets = [],
    tags = [],
    eyebrowLabel = "Kezeles",
    badgeLabel,
    badgeClassName = "",
    panelClassName = "",
    cardTitle,
    infoItems = [],
    noteTitle,
    noteBody,
    noteBullets = [],
    buttonText,
    buttonHref,
    onButtonClick,
  } = props;

  const panelClasses = `service-panel ${panelClassName}`.trim();

  return (
    <section className={panelClasses}>
      <div className="service-panel-inner">
        <div className="service-main">
          {eyebrowLabel && (
            <div className="service-eyebrow-row">
              <span className="service-eyebrow">
                {eyebrowLabel} {id}
              </span>
              {badgeLabel && (
                <span className={`service-badge ${badgeClassName}`.trim()}>
                  {badgeLabel}
                </span>
              )}
            </div>
          )}
          <h2 className="service-title">{title}</h2>
          <p className="service-lead">{lead}</p>
          {bullets.length > 0 && (
            <ul className="service-list">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {tags.length > 0 && (
            <div className="service-tags">
              {tags.map((tag) => (
                <span className="service-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <aside className="service-side">
          {(cardTitle || infoItems.length > 0) && (
            <div className="service-card">
              {cardTitle && <h3 className="service-card-title">{cardTitle}</h3>}
              {infoItems.length > 0 && (
                <div className="placeholder-grid">
                  {infoItems.map((item) => (
                    <div className="placeholder-item" key={item.label}>
                      <span className="placeholder-label">{item.label}</span>
                      <span className="placeholder-value">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {(noteTitle || noteBody || buttonText) && (
            <div className="service-note grey-background">
              {noteTitle && <p className="service-note-title">{noteTitle}</p>}
              {noteBody && <p className="service-note-body">{noteBody}</p>}
              {noteBullets.length > 0 && (
                <ul className="service-note-list">
                  {noteBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

export default ServicePanel;

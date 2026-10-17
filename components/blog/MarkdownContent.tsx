import React from 'react';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  // Split content by lines to process markdown blocks
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];

  let inList = false;
  let listItems: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const flushList = (key: string) => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={key} className="list-disc pl-6 space-y-2 my-4 text-muted">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = (key: string) => {
    if (inTable && tableRows.length > 0) {
      const headerRow = tableRows[0];
      const dataRows = tableRows.slice(1);

      elements.push(
        <div key={key} className="overflow-x-auto my-6 rounded-3xl border border-border">
          <table className="min-w-full text-left text-sm divide-y divide-border">
            <thead className="bg-muted/5 font-bold text-foreground">
              <tr>
                {headerRow.map((cell, idx) => (
                  <th key={idx} className="px-4 py-3">
                    {formatInline(cell.trim())}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {dataRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-muted/5">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-3 text-muted">
                      {formatInline(cell.trim())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  function formatInline(text: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    let remaining = text;

    const regex = /(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g;
    let match: RegExpExecArray | null;
    let lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="font-semibold text-foreground">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('*') && token.endsWith('*')) {
        parts.push(
          <em key={match.index} className="italic text-muted">
            {token.slice(1, -1)}
          </em>
        );
      } else if (token.startsWith('[') && token.includes('](') && token.endsWith(')')) {
        const splitIdx = token.indexOf('](');
        const linkText = token.slice(1, splitIdx);
        const linkUrl = token.slice(splitIdx + 2, -1);
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target={linkUrl.startsWith('http') ? '_blank' : undefined}
            rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-coral-start underline font-medium"
          >
            {linkText}
          </a>
        );
      }

      lastIndex = match.index + token.length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushList(`list-before-table-${index}`);
      if (trimmed.includes('---')) {
        return;
      }
      const cells = trimmed
        .slice(1, -1)
        .split('|');
      inTable = true;
      tableRows.push(cells);
      return;
    } else {
      flushTable(`table-before-line-${index}`);
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      inList = true;
      listItems.push(
        <li key={index} className="leading-relaxed">
          {formatInline(trimmed.slice(2))}
        </li>
      );
      return;
    } else if (/^\d+\.\s/.test(trimmed)) {
      inList = true;
      const content = trimmed.replace(/^\d+\.\s/, '');
      listItems.push(
        <li key={index} className="leading-relaxed">
          {formatInline(content)}
        </li>
      );
      return;
    } else {
      flushList(`list-before-line-${index}`);
    }

    if (trimmed === '---') {
      elements.push(
        <hr key={index} className="my-8 border-border" />
      );
      return;
    }

    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3
          key={index}
          className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-3 scroll-mt-24"
        >
          {formatInline(trimmed.slice(4))}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2
          key={index}
          className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 pb-2 border-b border-border scroll-mt-24"
        >
          {formatInline(trimmed.slice(3))}
        </h2>
      );
      return;
    }

    if (trimmed.startsWith('#### ')) {
      elements.push(
        <h4
          key={index}
          className="text-lg font-bold text-foreground mt-6 mb-2"
        >
          {formatInline(trimmed.slice(5))}
        </h4>
      );
      return;
    }

    if (trimmed.length > 0) {
      elements.push(
        <p key={index} className="text-base text-muted leading-relaxed my-4">
          {formatInline(trimmed)}
        </p>
      );
    }
  });

  flushList('final-list');
  flushTable('final-table');

  return <div className="font-sans">{elements}</div>;
}

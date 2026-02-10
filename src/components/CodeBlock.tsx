import { useEffect, useState } from 'react';
import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import langJson from 'shiki/langs/json.mjs';
import themeDark from 'shiki/themes/synthwave-84.mjs';
import themeLight from 'shiki/themes/rose-pine-dawn.mjs';

const highlighterPromise = createHighlighterCore({
  langs: [langJson],
  themes: [themeDark, themeLight],
  engine: createJavaScriptRegexEngine(),
});

type CodeBlockProps = {
  code: string;
  lang?: string;
  fileName?: string;
};

function CodeBlock({ code, lang = 'json', fileName = 'skills.json ' }: CodeBlockProps) {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    highlighterPromise.then(highlighter => {
      setHtml(
        highlighter.codeToHtml(code, {
          lang,
          themes: { dark: 'synthwave-84', light: 'rose-pine-dawn' },
        }),
      );
    });
  }, [code, lang]);

  return (
    <div className='relative w-full md:w-10/12 lg:w-8/12 bg-[#fefcf5] dark:bg-[#0a2936] rounded-2xl overflow-hidden border-2 border-border'>
      <div className='w-full py-2 px-3 flex border-b border-border justify-start bg-bg'>
        <div className='flex justify-evenly items-center gap-2'>
          <div className='rounded-full bg-red-400 w-3 h-3'></div>
          <div className='rounded-full bg-yellow-400 w-3 h-3'></div>
          <div className='rounded-full bg-green-400 w-3 h-3'></div>
        </div>
        <p className='font-mono text-sm text-text ml-12'>{fileName}</p>
      </div>

      <div className='w-full text-left'>
        <div className='p-4 text-sm' dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

export default CodeBlock;

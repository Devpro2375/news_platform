// src/components/news/NewsFilter.tsx
"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {  sdgs, SENTIMENT_FILTERS } from '@/lib/sdgs';

import { useLanguage } from '@/contexts/LanguageContext';

interface NewsFilterProps {
  selectedSDGs: number[];
  onSDGChange: (sdgs: number[]) => void;
  selectedSentiment: string;
  onSentimentChange: (sentiment: string) => void;
}

export function NewsFilter({
  selectedSDGs,
  onSDGChange,
  selectedSentiment,
  onSentimentChange
}: NewsFilterProps) {
  const { t } = useLanguage();
  
  const handleSDGToggle = (sdgId: number) => {
    if (selectedSDGs.includes(sdgId)) {
      onSDGChange(selectedSDGs.filter(id => id !== sdgId));
    } else {
      onSDGChange([...selectedSDGs, sdgId]);
    }
  };
  
  return (
    <div className="bg-card rounded-lg border p-4">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>
      
      <Accordion type="single" collapsible defaultValue="sdg">
        <AccordionItem value="sdg">
          <AccordionTrigger>{t('filter.sdg')}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 mt-2">
              {sdgs.map(sdg => (
                <div key={sdg.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`sdg-${sdg.id}`} 
                    checked={selectedSDGs.includes(sdg.id)}
                    onCheckedChange={() => handleSDGToggle(sdg.id)}
                  />
                  <Label 
                    htmlFor={`sdg-${sdg.id}`}
                    className="text-sm cursor-pointer"
                  >
                    SDG {sdg.id}: {sdg.title}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="sentiment">
          <AccordionTrigger>{t('filter.sentiment')}</AccordionTrigger>
          <AccordionContent>
            <RadioGroup 
              value={selectedSentiment} 
              onValueChange={onSentimentChange}
              className="space-y-2 mt-2"
            >
              {SENTIMENT_FILTERS.map(filter => (
                <div key={filter.value} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={filter.value} 
                    id={`sentiment-${filter.value}`} 
                  />
                  <Label 
                    htmlFor={`sentiment-${filter.value}`}
                    className="text-sm cursor-pointer"
                  >
                    {filter.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { sdgs, SENTIMENT_FILTERS } from '@/lib/sdgs';

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
    <div className="bg-white rounded-lg  border border-gray-200 p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filters</h2>
      
      <Accordion type="single" collapsible defaultValue="sdg">
        <AccordionItem value="sdg">
          <AccordionTrigger className="px-4 py-3 text-lg font-medium text-gray-700 bg-transparent hover:bg-gray-100 rounded-md transition-all">
            {t('filter.sdg')}
          </AccordionTrigger>
          <AccordionContent className="space-y-4 mt-4 p-4">
            {sdgs.map(sdg => (
              <div key={sdg.id} className="flex items-center space-x-3">
                <Checkbox 
                  id={`sdg-${sdg.id}`} 
                  checked={selectedSDGs.includes(sdg.id)}
                  onCheckedChange={() => handleSDGToggle(sdg.id)}
                  className="transition-all focus:ring-2 focus:ring-teal-400"
                />
                <Label 
                  htmlFor={`sdg-${sdg.id}`}
                  className="text-sm text-gray-600 cursor-pointer hover:text-teal-500 transition-all"
                >
                  SDG {sdg.id}: {sdg.title}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="sentiment">
          <AccordionTrigger className="px-4 py-3 text-lg font-medium text-gray-700 bg-transparent hover:bg-gray-100 rounded-md transition-all">
            {t('filter.sentiment')}
          </AccordionTrigger>
          <AccordionContent className="space-y-4 mt-4 p-4">
            <RadioGroup 
              value={selectedSentiment} 
              onValueChange={onSentimentChange}
              className="space-y-3"
            >
              {SENTIMENT_FILTERS.map(filter => (
                <div key={filter.value} className="flex items-center space-x-3">
                  <RadioGroupItem 
                    value={filter.value} 
                    id={`sentiment-${filter.value}`} 
                    className="transition-all focus:ring-2 focus:ring-teal-400"
                  />
                  <Label 
                    htmlFor={`sentiment-${filter.value}`}
                    className="text-sm text-gray-600 cursor-pointer hover:text-teal-500 transition-all"
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

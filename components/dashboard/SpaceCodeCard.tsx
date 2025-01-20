import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle2 } from 'lucide-react';

const SpaceCodeCard = ({ spaceCode }: { spaceCode: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(spaceCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
      <Card className="bg-neutral-800/50 backdrop-blur-xl shadow-xl border-neutral-700/50 mb-12">
        <CardHeader className="pb-3">
        <CardTitle className="text-neutral-200 text-lg font-medium">Space Code</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between bg-neutral-900/50 rounded-lg p-3 border border-neutral-700">
          <code className="text-emerald-400 font-mono text-lg">
            {spaceCode}
          </code>
          <Button
            onClick={copyToClipboard}
            variant="ghost"
            size="sm"
            className="hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200"
          >
            {copied ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </Button>
        </div>
        <p className="text-neutral-400 text-sm mt-2">
          Share this code with your team members to invite them to your space
        </p>
      </CardContent>
    </Card>
  );
};

export default SpaceCodeCard;
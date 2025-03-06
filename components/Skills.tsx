import { Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4"> {/* Ensures centering and prevents overflow */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsContent value="frontend" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['Tailwind CSS', 'React', 'NextJs', 'TypeScript', 'MySQL'].map((skill) => (
                <Card key={skill}>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="font-medium">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

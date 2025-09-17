import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
const SaveTheDateCalendar = () => {
  const competitionDate = new Date(2025, 9, 11); // October 11, 2025 (month is 0-indexed)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(competitionDate);
  const handleSaveTheDate = () => {
    // Create calendar event
    const eventTitle = "JBCN STARS - Mathematics Competition";
    const eventStart = "2025-10-11T08:00:00";
    const eventEnd = "2025-10-11T15:00:00";
    const eventDescription = "JBCN STARS (Scholastic Tournament for Advanced Mathematics and Reasoning Skills) - Team competition for grades 6-12";
    const eventLocation = "JBCN Parel, Mumbai";

    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStart.replace(/[-:]/g, '').replace('T', 'T')}Z/${eventEnd.replace(/[-:]/g, '').replace('T', 'T')}Z&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;

    // Open Google Calendar
    window.open(googleCalendarUrl, '_blank');
    toast.success("Calendar event created! Check your Google Calendar.");
  };
  return <div className="w-full max-w-4xl mx-auto px-4 sm:px-0">
      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold bg-primary/20 text-primary border-primary/30">
            Important
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2">Save The Date</h2>
          <p className="text-muted-foreground">Mark your calendar for JBCN STARS 2025!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left - Competition Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <CalendarDays className="w-6 h-6 text-primary" />
              <h3 className="text-xl sm:text-2xl font-bold">Competition Date</h3>
            </div>

            {/* Date Card */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-primary">October 11, 2025</h4>
                  <p className="text-muted-foreground">Saturday</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>7:30 AM - 3:00 PM</span>
              </div>
              
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>JBCN Parel, Mumbai</span>
              </div>
            </div>

            {/* Event Description */}
            <div className="space-y-3">
              <h4 className="font-semibold">About the Competition</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Join us for an exhilarating display of mathematical prowess and problem-solving skills. 
                JBCN STARS is a team competition open to students from grades 6-12, featuring three exciting rounds: 
                Individual Round, Team Round, and Math Quiz.
              </p>
            </div>

            {/* Save the Date Button */}
            <Button onClick={handleSaveTheDate} size="lg" className="w-full text-base sm:text-lg py-4 sm:py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <CalendarDays className="w-5 h-5 mr-2" />
              Add to Calendar
            </Button>
          </div>

          {/* Right - Calendar */}
          <div className="flex justify-center">
            <div className="bg-background/50 border border-border rounded-2xl p-6 shadow-inner">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-lg">October 2025</h4>
              </div>
              
              <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} defaultMonth={competitionDate} className="pointer-events-auto" modifiers={{
              competition: competitionDate
            }} modifiersStyles={{
              competition: {
                backgroundColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
                fontWeight: 'bold',
                borderRadius: '8px'
              }
            }} components={{
              IconLeft: ({
                ...props
              }) => <ChevronLeft className="h-4 w-4" {...props} />,
              IconRight: ({
                ...props
              }) => <ChevronRight className="h-4 w-4" {...props} />
            }} />
              
              <div className="text-center mt-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded"></div>
                  <span>Competition Day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default SaveTheDateCalendar;
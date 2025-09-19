import React from 'react';
import { StyledView, StyledText } from './Styled';
import { Mic, BarChart3, Users } from 'lucide-react-native';

const FeatureCard = ({ icon, title, children }) => (
    <StyledView className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm">
        <StyledView className="flex items-center justify-center h-16 w-16 bg-teal-100 text-teal-600 rounded-2xl mb-6">
            {icon}
        </StyledView>
        <StyledText className="text-xl font-bold text-gray-800">{title}</StyledText>
        <StyledText className="mt-2 text-gray-600">{children}</StyledText>
    </StyledView>
);

const Features = () => (
    <StyledView id="features" className="py-24 bg-white">
        <StyledView className="container mx-auto px-6">
            <StyledView className="text-center mb-16">
                <StyledText className="text-teal-600 font-semibold">WHY CIVICVOICE?</StyledText>
                <StyledText className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">A Platform Built for Change</StyledText>
            </StyledView>
            <StyledView className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard icon={<Mic size={32} className="text-teal-600" />} title="Accessible Reporting">Snap a photo or simply use your voice in any regional language to submit a report effortlessly.</FeatureCard>
                <FeatureCard icon={<BarChart3 size={32} className="text-teal-600" />} title="Transparent Tracking">Get real-time updates and notifications as your report moves from acknowledged to resolved.</FeatureCard>
                <FeatureCard icon={<Users size={32} className="text-teal-600" />} title="Community Prioritization">Upvote existing issues to highlight their priority. Let the authorities know what matters most.</FeatureCard>
            </StyledView>
        </StyledView>
    </StyledView>
);

export default Features;
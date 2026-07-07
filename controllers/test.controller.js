import Subscription from "../models/subscription.model.js";
import { sendReminderEmail } from "../utils/send-email.js";

export const testEmail = async (req, res, next) => {
    try {
        const subscription = await Subscription.findOne()
            .populate("user", "name email");

        await sendReminderEmail({
            to: "tpdivyasrita10@gmail.com",
            type: "7 days before reminder",
            subscription,
        });

        res.status(200).json({
            success: true,
            message: "Test email sent successfully",
        });
    } catch (error) {
        next(error);
    }
};